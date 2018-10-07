/**
 *
 * title: 公共组件
 * 根目录页面
 * description: 开发测试组件
 *
 * author: liutong
 *
 * date: 2017/06/06
 */

import Nerv from 'nervjs';
// import Header from '../../component/common/header/header'
// import Menu from '../../component/common/menu/menu'
// import ToTop from '../../component/common/toTop/toTop'

// import Notes from "../../component/common/notes/notes";
import './index.less'
import PropTypes from 'prop-types'

export default class Root extends Nerv.Component {
    constructor(props){
        super(props);
        this.state={
            searchType:"999",
            search:"",
            menu:'999',
            isShowNotes:true,
            dateSocketIO:false,      //socketIO返回数据状态
        }
    }

    render() {
        // 给子组件传递参数时调用的方式
        /* let children = React.cloneElement(this.props.children, {
         // searchType: this.state.searchType,
         search: this.state.search,
         menu: this.state.menu
         });*/
        return (
            <div className="Root-outer">
                <div className="Root-header">

                    <div className="Root-nav">

                    </div>
                </div>
                <div className="Root-content">
                    {/*{children}*/}
                    {this.props.children }
                    <div className="thematicIndex-toTop">

                    </div>
                </div>
            </div>
        );
    }
}