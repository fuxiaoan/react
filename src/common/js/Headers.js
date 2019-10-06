import React, { Component } from 'react';
import '../css/headers.css'
import Search from './Search.js'

//nav导航 dom
// function NavsList(poros){
// 	return(
// 		poros.navs.map((value,index) =>
// 			<div 
// 				onMouseOver={this.navMouHover}
// 				onMouseLeave={this.navMouLeave}
// 			>
// 				<li key={value.id}>{value.name}<i className="iconfont icon-arrow_down iconNav"></i></li>
// 				{	value.child.map((v,i) =>
// 					<div className="drop">
// 						<li key={v.id}>{v.name}<i className="iconfont icon-arrow_down iconNav"></i></li>
// 					</div>
// 					)
// 				}
// 			</div>
// 		)
// 	)
// }

/*
* navIndex  nav导航的hover事件
*/

class Header extends Component {
	constructor(props) {
	    super(props);
	    this.state  = {navIndex:null,showSearch:false};
		this.navMouHover = this.navMouHover.bind(this);
		this.navMouLeave = this.navMouLeave.bind(this);
		this.showSea = this.showSea.bind(this);
	}
	
	//nav鼠标移入
	 navMouHover(index){
		this.setState ({
			navIndex: index
		})
	 } 
	//navs鼠标移出
	navMouLeave(){
		this.setState({
			 navIndex: null
		})
	}
	//搜索的显示和隐藏
	showSea(){
		this.setState(prevState => ({
		      showSearch: !prevState.showSearch
		    }));
	}
	//监听子组件close
	showSeason(val){
		this.setState({
		    showSearch: false
		});
	}
render() {
	//需要用到的数据
	const navs = [
		{
			'id':'1','name':'个人博客模板',child:[
				{'id':'11','name':'个人博客模板',}
			]
		},{
			'id':'2','name':'博客网站制作',child:[
				{'id':'21','name':'个人博客模板',}
			]
		},{
		'id':'3','name':'企业网站建设',child:[
			{'id':'31','name':'个人博客模板',}
		]
		},{
			'id':'4','name':'网页设计心得',child:[
				{'id':'41','name':'个人博客模板',}
			]
		}
	]
	const title = '永远不知的终点'
	

	 // 主体dom// <NavsList navs={navs} />// 
    return (
	<div>
		<header className="header">
			<div className="contaner">
				<p className="title">{title}</p>
				<ul className="header_nav hand" >
					<li>网站首页</li>
						{
							navs.map((value,index) =>
								<div 
									onMouseOver={this.navMouHover.bind(this,index)}
									onMouseLeave={this.navMouLeave}
									key={index}
								>
									<li>{value.name}
										<i className={`iconNav iconfont ${this.state.navIndex===index ? 'icon-icon_arrow_up' : 'icon-arrow_down'}`}></i>
										
										
										</li>
									{	value.child.map((v,i) =>
										<div className="drop" 
											 key={i}
											 style={{display:this.state.navIndex===index ? 'block' :'none'}}
										>
											<li>{v.name}</li>
										</div>
										)
									}
								</div>
							)
						}
					<li>优秀个人博客</li>
				</ul>
				<p className="hand" onClick={this.showSea}><i className="iconfont icon-sousuo icon"></i></p>
			</div>
		</header>
		<div style={{display:this.state.showSearch ? 'block' : 'none'}}>
			<Search showSeason={this.showSeason.bind(this)}></Search>
		</div>
	</div>
	);
  }
}

export default Header;