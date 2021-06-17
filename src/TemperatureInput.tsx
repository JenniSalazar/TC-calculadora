import React from 'react';

export enum ScaleType {
	C='CELSIUS',
	F='FARENHEIT'
}
const SCALE_TYPES = {
	c:ScaleType.C,
	f:ScaleType.F
};

interface TemperatureInputProps {
	temperature:string,
	scale: ScaleType, 
	onTemperatureChange: (e: string) => void
}

export class TemperatureInput extends React.Component<TemperatureInputProps, {}> {
	constructor(props: TemperatureInputProps | Readonly<TemperatureInputProps>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value, this.props);
		this.props.onTemperatureChange(e.target.value);
		// this.setState({temperature:e.target.value})
	}

	render(){
		const {temperature} = this.props;
		const {scale} = this.props;
		const scaleText = scale === ScaleType.C ? SCALE_TYPES.c :  SCALE_TYPES.f;
		return<fieldset>
			<legend>Enter temperature in {scaleText}: </legend>
			<input value={temperature}   onChange={this.handleChange}/>
		</fieldset>
	}
}