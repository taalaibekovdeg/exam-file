import React from 'react';
import "./index.scss"
import logo from "../../Image/logo.png"
import apparat from "../../Image/apparat.png"
import ellipse from "../../Image/ellipse.png"

const Page = ({dark, setDark}: any) => {


    return (
        <>
         <div id='page'>
             <header id='header'>
                     <div className="container">
                          <div className='header'>
                              <div className="header--logo">
                                   <img src={logo} alt="" />
                              </div>
                                   <div className='header--nav'>
                                        <a href="#">Главная</a>
                                        <a href="#">Курсы   </a>
                                        <a href="#">Расписание</a>
                                        <a href="#">Преподаватели</a>
                                        <a href="#">Рассылка</a>
                                        <a href="#">Контакты</a>
                                   </div>
                                   <div className='header--button'>
                                    <button onClick={() => setDark(!dark)}>Зайти в кабинет</button>
                                   </div>
                          </div>
                     </div>
                     <div className="hero">
                    <h1>
                    Первый курс  <br />
                    по компьютерной сборке
                    </h1>
                    <div className="hero--block">
                         <div className='hero--block__title'>
                              <h4>18</h4>
                              <p>Дней</p>
                         </div>
                         <div className='hero--block__title'>
                              <h4>18</h4>
                              <p>Часов</p>
                         </div>
                         <div className='hero--block__title'>
                              <h4>18</h4>
                              <p>Минут</p>
                         </div>
                         <div className='hero--block__title'>
                              <h4>18</h4>
                              <p>Секунд</p>
                         </div>
                    </div>
                   </div>
             </header>
            
          
           
             <div className="order" style={{
               background: dark ? "black" : "white",
               color: dark ? "white" : "black"
             }}>
               <div className='container'>
               <div className='order--nav'>
                       <button>Заказать курс</button>
                       <div className='order--nav__participant'>
                    <p>Учеников всего: <span>200</span></p>
                    <p>Успешно закончили курс: <span>190</span></p>

                       </div>
                       <div className='order--nav__inform'>
                         <p>Заработано учениками: <span>400 000₽</span></p>
                         <div className='order--nav__inform--ruler'>
                              <hr className='order--nav__inform--ruler__left'/>
                              <hr className='order--nav__inform--ruler__right'/>
                         </div>
                         <p>0 <span>1 000 000₽</span></p>
                         
                       </div>
               </div>
               </div>
               
             </div>

             <div id='medium' style={{
               background: dark ? "black" : "white",
               color: dark ? "white" : "black"
             }}>
               <div className='container'>
               <div className="medium">
                    <div className='medium--square'>
                       <img src={apparat} alt="" />
                    </div>
                    <div className="medium--text">
                         <h1 style={{color: dark ? "white" : "black"}}>Чем мы занимаемся?</h1>
                         <h5 style={{color: dark ? "white" : "black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget neque, dignissim et feugiat elit augue in suspendisse egestas. Dictum vestibulum mi et sed nunc, orci fermentum vestibulum, morbi. Et neque, adipiscing sapien sem senectus praesent aenean consequat. Aenean facilisi turpis aliquet fringilla. Nunc sem felis sed interdum feugiat mattis elit, sollicitudin. Quam pharetra rhoncus risus, cursus id elementum aliquet. Nullam turpis arcu malesuada arcu interdum placerat nisi, lobortis. </h5>
                    </div>
               </div>

               <div className="start">
                    <div className='start--title'>
                    <img src={ellipse} alt="" />
                    <h2>Быстрый старт</h2>
                    </div>
                    
               </div>
               </div>
              

             </div>
            
        </div>
        
       </>
    );
};

export default Page;