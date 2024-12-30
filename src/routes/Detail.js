// <Route path="/detail/:id" element={ <Detail shoes={shoes}/> } />의 url파라미터를 응용
// 추후에, id변수가 숫자가 아니고 이상하면 상품이 없다는 ui도 추가해야 한다.
import { useParams } from "react-router-dom";

function Detail(props){

    let {id} = useParams();  //url파라미터가 남는다

    return(
    <div className="container">
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].price}</p>
            <p>{props.shoes[id].content}</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div> 
    )
}

export default Detail;