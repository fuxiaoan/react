import React, { Component } from 'react';
import '../css/mian.css'

class Banner extends Component {
  constructor(props) {
    super(props);
	this.state = {
		ium:0,
		bannerData : []
	}
  }
  
  componentDidMount(){
	  let _this = this.state
	  let bannerData = [
	  	{'img':'http://www.zbboke.com/templets/boke/picture/banner_3.jpg','show':"block"},
	  	{'img':'http://www.zbboke.com/templets/boke/picture/banner_1.jpg','show':"none"},
	  	{'img':'http://www.zbboke.com/templets/boke/picture/banner.gif','show':"none"}
	  ]
	  this.setState({
		  bannerData:bannerData
	  })
	  
	  setInterval(_=>{
			let _this = this.state	  
			this.setState({
				ium : _this.ium + 1===_this.bannerData.length ? 0 : _this.ium +1
			},function(){
				_this.bannerData = _this.bannerData.map((v,i)=>{
					return Object.assign(v,{
						show:i===_this.ium ? "block" : "none"
					})
				})
			})
		},5000)
	  
  }
  
  
  
  
  
  render() {
	
	
	return (
	<div className="contaner">
		<ul className="bannerBox">
			{
				this.state.bannerData.map((value,index) => 
					<li key={index} style={{backgroundImage:`url(${value.img})`,display:value.show}} ></li>
				)
			}
		</ul>
	</div> 
	)
  }
}

export default Banner;