import './Footer.css'

function Footer(){
   return (
       <div className='Footer'>
           <div className="FooterButton">
               <button>Заказать курс</button>
           </div>
           <div className='Footer-FirstBlock'>
               <p>Учеников всего   <strong> : 200</strong></p>
               <p>Успешно закончил курс  <strong> : 190</strong> </p>
           </div>
           <div className='Footer-SecondBlock'>
               <p className='border-bottom'>Заработано учениками <strong> : 400 000 P</strong></p>
               <p>0</p>
               <p>1 000 000 P</p>
           </div>
       </div>
   )
}

export default Footer