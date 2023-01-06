import React from 'react';
import './form.css';
const Form = () => {
	return (
		<div className="search_form">
			<form>
				<input type="date" id="form" className="input_box" />

				<input type="date" id="to" className="input_box date" />
				<label htmlFor="guest" className="input_box">
					Guest
				</label>
				<select id="guest" value="Guest" className="input_box ">
					<option name="" id="">
						1
					</option>
					<option name="" id="">
						2
					</option>
					<option name="" id="">
						3
					</option>
					<option name="" id="">
						4
					</option>
				</select>
				<label htmlFor="child" className="input_box">
					Child
				</label>
				<select value="" id="child" className="input_box child">
					<option name="" id="">
						1
					</option>
					<option name="" id="">
						2
					</option>
					<option name="" id="">
						3
					</option>
					<option name="" id="">
						4
					</option>
				</select>

				<input
					type="submit"
					value="Ckeck Availability"
					className="input_box "
				/>
			</form>
		</div>
	);
};

export default Form;
