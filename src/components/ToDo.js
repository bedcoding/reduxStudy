import React from "react"
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

// Home.js에서 전달받은 인자: [text, id]
function ToDo( { text, id, onBtnClick }, {props} ) {
        console.log("props: " + props);
        
    return (
        <li> 
            {/* App.js에서 path가 [ /:id ] 형태일 경우 Detail.js 파일로 이동하도록 설정 -> 클릭시 이동 */}
            <Link to = {`/${id}`}>
                {text} <button onClick = {onBtnClick}> DEL </button>
            </Link>
        </li>
    );
}

// id: 이미 store.js에서 ADD라는 action이 리듀서에 도달할 때 store에 id도 함께 넣고 있으므로, 우리는 ownProps를 통해 store에 있는 id를 가져오기만 하면 된다.
function mapDispatchToProps(dispatch, ownProps) {
    console.log(ownProps);
    
    return {
        onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))  // 삭제하라는 action을 (dispatch를 통해) 리듀서로 전달
    }
}

export default connect(null, mapDispatchToProps)(ToDo);
// export default ToDo;