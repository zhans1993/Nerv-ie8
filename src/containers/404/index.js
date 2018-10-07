/**
 *
 * title: 404/index.js
 *
 * description: 404错误页面
 *
 * author: liyang
 *
 * date: 2017/05/15
 */

import Nerv from 'nervjs';
import styles from './index.less';

export default class NotFoundPage extends Nerv.Component {
    render() {
        return (
            <div className='NotFoundPage-demo'>
                <p>
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </p>
                <p>该页面不存在(´･ω･`)</p>
            </div>
        )
    }
}