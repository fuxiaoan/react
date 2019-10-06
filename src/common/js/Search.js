import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state  = {searchName:''};
  	this.searchChange = this.searchChange.bind(this);
  	this.inputChange = this.inputChange.bind(this);
	this.closeSeach = this.closeSeach.bind(this);
  }
  
  //搜索
  searchChange(){
  	console.log(this.state.searchName)
  }
  
  //input改变值 this.refs.searchName.value   refs获取value值
  inputChange(){
  	this.setState ({
  		searchName: this.refs.searchName.value
  	})
  }
  
  //关闭search
  closeSeach(){
	  this.props.showSeason(false)
  }
  
  render() {
    return (
	 <div className="contaner search">
	 	<div className="searchBox">
	 		<input type="text" value={this.state.searchName} ref='searchName' placeholder="请输入关键词" onChange={this.inputChange} /> 
	 		<button  onClick={this.searchChange} >搜索</button>
			<div className="closeBox hand" onClick={this.closeSeach}><i className="iconfont icon-close"></i></div>
	 	</div>
	 </div>
      
    );
  }
}

export default Search;