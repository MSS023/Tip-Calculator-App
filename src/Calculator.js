import "./Calculator.css";
import dollar from "./Images/icon-dollar.svg"
import person from "./Images/icon-person.svg"
import React,{useState} from "react";

function Calculator() {
	//const {obj,setObj}=useState({bill: "",custom: "",NoP: "",tipam: 0, total: 0,perc: 0});
	const [obj,setObj]=useState(["","","",0,0,0,true,""]);
	var perc;
	
	function handleBill(e) {
		var Bill=e.target.value;
		var Tipam=0,Total=0;
		if(Bill!=null && obj[5]!=null && obj[2]>0)
		{
			Tipam=Math.round((Bill*obj[5])/(obj[2]))/100;
			Total=Math.round(((Bill/obj[2]+Tipam))*100)/100;
		}
		setObj([Bill,obj[1],obj[2],Tipam,Total,obj[5],false,obj[7]]);
	}
	
	function setPerc(e) {
		var Custom=obj[1];
		var Tipam=0,Total=0;
		if(e.target.name==="custom")
		{
			perc=e.target.value;
			Custom=perc;
		}
		else
			perc=e.target.name;
		if(obj[0]!=null && perc!=null && obj[2]>0)
		{
			Tipam=Math.round((obj[0]*perc)/(obj[2]))/100;
			Total=Math.round(((obj[0]/obj[2]+Tipam))*100)/100;
		}
		setObj([obj[0],Custom,obj.[2],Tipam,Total,perc,false,obj[7]]);
	}
	
	function setNoP(e) {
		var Tipam=0,Total=0;
		var NoP=e.target.value,obj7=obj[7];
		if(NoP==="0")
			obj7="hidden";
		else if(NoP!=="0")
			obj7="";
		if(obj[0]!=null && obj[5]!=null && NoP>0)
		{
			Tipam=Math.round((obj[0]*obj[5])/(NoP))/100;
			Total=Math.round(((obj[0]/NoP+Tipam))*100)/100;
		}
		setObj([obj[0],obj[1],NoP,Tipam,Total,obj[5],false,obj7]);
	}
	
	function handleReset(){
		setObj(["","","",0,0,0,true,""]);
	}
	
	return <div className="Calculator row">
		<div className="Panel col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
			<label htmlFor="bill">Bill</label>
			<div className="dollar Billgrp">
				<img src={dollar} className="dollarimg" alt="bill" />
				<input type="number" className="dollar" id="bill" placeholder="0" value={obj[0]} onChange={handleBill} />
			</div>
			<div className="Tip">
				<label htmlFor="Tip">Select Tip %</label>
				<div className="container" id="Tip">
  					<div className="row row-cols-lg-3 row-cols-xl-3 row-cols-md-3 row-cols-sm-2 row-cols-2">
    					<div className="col Tip-div">
							<input name={5} className="Tip-button" type="button" value="5%" onClick={setPerc}/>
						</div>
    					<div className="col Tip-div">
							<input name={10} className="Tip-button" type="button" value="10%" onClick={setPerc}/>
						</div>
    					<div className="col Tip-div">
							<input name={15} className="Tip-button" type="button" value="15%" onClick={setPerc}/>
						</div>
    					<div className="col Tip-div">
							<input name={25} className="Tip-button" type="button" value="25%" onClick={setPerc}/>
						</div>
						<div className="col Tip-div">
							<input name={50} className="Tip-button" type="button" value="50%" onClick={setPerc}/>
						</div>
						<div className="col Tip-div">
							<input className="Tip-button Tip-input" name="custom" type="number" placeholder="Custom" value={obj[1]} onChange={setPerc}/>
						</div>
  					</div>
				</div>
			</div>
			<div className="NoPdiv row">
				<label className="col-6" htmlFor="NoP">Number of People</label>
				<label className={"col-6 label2"+obj[7]} htmlFor="Nop">Can't be zero</label>
				<div className={"NoP NoPgrp"+obj[7]}>
					<img src={person} className="NoPimg" alt="Person" />
					<input type="number" className="NoP" id="NoP" placeholder="0" value={obj[2]} onChange={setNoP}/>
				</div>
			</div>
		</div>
		<div className="Result col-lg-6 col-xl-6 col-md-6 col-sm-12 col-12">
			<div className="row">
				<div className="col">
					<p className="Result-Title">Tip Amount</p>
					<p className="Result-Subscript">/ person</p>
				</div>
				<div className="col Result-Value">
					<p>${obj[3]}</p>
				</div>
			</div>
			<div className="row">
				<div className="col Result-grp">
					<p className="Result-Title">Total</p>
					<p className="Result-Subscript">/ person</p>
				</div>
				<div className="col Result-grp">
					<p className="Result-Value">${obj[4]}</p>
				</div>
			</div>
			<button className="Reset-button" disabled={obj[6]} onClick={handleReset}>RESET</button>
		</div>
	</div>;
	}

export default Calculator;