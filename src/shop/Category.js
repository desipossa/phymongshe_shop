import React from 'react';
import { Link, useParams } from 'react-router-dom';

const List = ({ shopList }) => {
    const { cate } = useParams();
    //url 파라미터에 뿌려진 값을 받아와서 새 배열을 만드는데 ... 원래배열에서 카테고리가 일치하는 것으로.
    const cateList = shopList.filter(it => cate === it.cate)
    return (
        <section className='shopList pn'>
            <div className="category">
                홈 : {cate}
            </div>
            <h2>{cate}</h2>
            <ul className="list">
                <li>total product : {cateList.length}</li>
                <li className='line'>line</li>
                <li>
                    <ul className='option'>
                        <li>신상품</li>
                        <li>낮은가격</li>
                        <li>높은가격</li>
                        <li>인기상품</li>
                    </ul>
                </li>
            </ul>
            <div className='inner'>
                {
                    cateList.map((it, idx) => {
                        return (
                            <figure key={it.id}>
                                <Link to={'/shopItem/' + it.id}>
                                    <div className="box">
                                        <img src={it.src} alt="" />
                                    </div>
                                    <div className='name'>{it.name}</div>
                                    <div className='des'>{it.des.substring(0, 100)} ...</div>
                                    <div className='price'><span>{it.price.toLocaleString()}</span> 원</div>
                                </Link>
                            </figure>
                        )
                    })
                }
            </div>
        </section>

    )
}

export default List