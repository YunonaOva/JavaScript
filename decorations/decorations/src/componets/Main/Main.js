import CardDecor from "../CardDecor/CardDecor";
import CardDecorBr from "../CardDecorBr/CardDecorBr";
import CardDecorCh from "../CardDecorCh/CardDecorCh";
import CardDecorP from "../CardDecorP/CardDecorP";

import myImage from "../../assets/image_Olga/chain.webp";
import myImageSergi from "../../assets/image_Olga/g_sergi.jpg";
import myImagebraslet from "../../assets/image_Olga/braslet.webp";
import myImagePendant from "../../assets/image_Olga/Pendant.jpg";
import myImagemain from "../../assets/image_Olga/main.jpg";
import myImageSergi_Izurud from "../../assets/image_Olga/Sergi_Izurud.webp";
import myImageSergi_Sapfir from "../../assets/image_Olga/sergi_Sapfir.jpg";
import myImageSergi_mramor from "../../assets/image_Olga/Sergi_mramor.webp";






function Main () {

    const productSergi = [
        {
          link: "#",
          image: myImageSergi,
          name: "Серьги",
          nameproduct: "Марамор",
          price: 500,
          matter: "***",
          description: "описание"
        },
        {
            link: "#",
            image: myImageSergi_Izurud,
            name: "Серьги",
            nameproduct: "Изумруд",
            price: 1500,
            matter: "***",
            description: "описание"
        },
        {
            link: "#",
            image: myImageSergi,
            name: "Серьги",
            nameproduct: "Сапфир",
            price: 1300,
            matter: "***",
            description: "описание"
        },
        {
            link: "#",
            image: myImageSergi,
            name: "Серьги",
            nameproduct: "Гранат",
            price: 900,
            matter: "***",
            description: "описание"
        },
        {
            link: "#",
            image: myImageSergi,
            name: "Серьги",
            nameproduct: "Рубин",
            price: 2500,
            matter: "***",
            description: "описание"
        }
    ];

    const productBracelet = [
      {
        link: "#",
        image: myImagebraslet,
        name: "Браслет",
        nameproduct: "Гвоздь",
        price: 500,
        matter: "***",
        description: "описание"
      },
      {
          link: "#",
          image: myImagebraslet,
          name: "Браслет",
          nameproduct: "Стиль",
          price: 1500,
          matter: "***",
          description: "описание"
      },
      {
          link: "#",
          image: myImagebraslet,
          name: "Браслет",
          nameproduct: "Восторг",
          price: 1800,
          matter: "***",
          description: "описание"
      },
      {
          link: "#",
          image: myImagebraslet,
          name: "Браслет",
          nameproduct: "Вдохновение",
          price: 2000,
          matter: "***",
          description: "описание"
      },
      {
          link: "#",
          image: myImagebraslet,
          name: "Браслет",
          nameproduct: "Радость",
          price: 2500,
          matter: "***",
          description: "описание"
      }
  ];

  const productChain = [
    {
      link: "#",
      image: myImage,
      name: "Цепочка",
      nameproduct: "18 дюймов",
      price: 500,
      matter: "***",
      description: "описание"
    },
    {
        link: "#",
        image: myImage,
        name: "Цепочка",
        nameproduct: "20 дюймов",
        price: 500,
        matter: "***",
        description: "описание"
    },
    {
        link: "#",
        image: myImage,
        name: "Цепочка",
        nameproduct: "22 дюймов",
        price: 500,
        matter: "***",
        description: "описание"
    },
    {
        link: "#",
        image: myImage,
        name: "24 дюймов",
        nameproduct: "Гвоздь",
        price: 500,
        matter: "***",
        description: "описание"
    },
    {
        link: "#",
        image: myImage,
        name: "Цепочка",
        nameproduct: "26 дюймов",
        price: 500,
        matter: "***",
        description: "описание"
    }
];

const productPendant = [
  {
    link: "#",
    image: myImagePendant,
    name: "Подвеска",
    nameproduct: "Роза",
    price: 500,
    matter: "***",
    description: "описание"
  },
  {
      link: "#",
      image: myImagePendant,
      name: "Подвеска",
      nameproduct: "Тюльпан",
      price: 550,
      matter: "***",
      description: "описание"
  },
  {
      link: "#",
      image: myImagePendant,
      name: "Подвеска",
      nameproduct: "Орхидея",
      price: 1500,
      matter: "***",
      description: "описание"
  },
  {
      link: "#",
      image: myImagePendant,
      name: "Подвеска",
      nameproduct: "Гвоздика",
      price: 1600,
      matter: "***",
      description: "описание"
  },
  {
      link: "#",
      image: myImagePendant,
      name: "Подвеска",
      nameproduct: "Подснежник",
      price: 1700,
      matter: "***",
      description: "описание"
  }
];


    const formattedProduct = productSergi.map((item) => 
      {
        return(

          <CardDecor
          link ={item.link}
          image= {item.image}
          name = {item.name}
          nameproduct = {item.nameproduct}
          price = {item.price}
          matter = {item.matter}
          description = {item.description}
          />
               )
      }
    );

    const formattedProductBr = productBracelet.map((itembr) => 
      {
        return(

          <CardDecorBr
          link ={itembr.link}
          image= {itembr.image}
          name = {itembr.name}
          nameproduct = {itembr.nameproduct}
          price = {itembr.price}
          matter = {itembr.matter}
          description = {itembr.description}
          />
               )
      }
    );

    const formattedProductCh = productChain.map((itemch) => 
      {
        return(

          <CardDecorCh
          link ={itemch.link}
          image= {itemch.image}
          name = {itemch.name}
          nameproduct = {itemch.nameproduct}
          price = {itemch.price}
          matter = {itemch.matter}
          description = {itemch.description}
          />
               )
      }
    );

    const formattedProductP = productPendant.map((itemp) => 
      {
        return(

          <CardDecorP
          link ={itemp.link}
          image= {itemp.image}
          name = {itemp.name}
          nameproduct = {itemp.nameproduct}
          price = {itemp.price}
          matter = {itemp.matter}
          description = {itemp.description}
          />
               )
      }
    );

    return (
        <div class="main">  
            <div class="menu">
                <div>
                    <img src={myImagemain}  alt="Витрина"></img>
                
            
                    <ol>                 
                        <li><a href="#ssSergi" Перенести на>Серьги</a></li>
                        <li><a href="#ssbraslet" Перенести на>Браслеты</a></li>
                        <li><a href="#ssCh" Перенести на>Цепочки</a></li>
                        <li><a href="#ssPendant" Перенести на>Подвески</a></li>

                    </ol>
                </div> 
            </div> 
            <div class="content">
                <p>
                <span class="main-text"> Добро пожаловать в мир уникальных украшений!</span>
                </p>
                    
                <div class="conteiner">
                        <div class="text-probel"> Наша бижутерия создана для тех, кто ценит красоту, стиль и оригинальность. У нас вы найдете украшения на любой вкус
                        и для любого случая - от элегантных сережек и кулонов до ярких браслетов и колье.</div>
                            
                        <div class="text-probel">Мы уверены, что каждая женщина заслуживает быть окруженной красотой, поэтому наша главная цель - помочь вам
                        подчеркнуть вашу индивидуальность и стиль с помощью наших украшений.</div>
                            
                        <div class="text-probel">Давайте вместе делать мир ярче и красивее, начиная с вашего украшения! Приятных покупок!</div>
                </div>
                
                    
                <span class="main-text"> Куда направимся? Путешествовать по миру украшений. 
                </span>
                    
                <div class="spisok">
                <p>Содержание</p>
                <br></br>
                    <div>
                        <ul>                 
                             <li><a href="#ssSergi" Перенести на> Серьги </a></li>
                             <div class="small-image-wrapper">
                                <img class="small-image" src={myImageSergi}  alt="Картинка с серьгами"></img>
                             </div>
                        </ul>
                        <ul>
                             <li><a href="#ssbraslet" Перенести на>Браслеты</a></li>
                             <div class="small-image-wrapper">
                                <img class="small-image" src={myImagebraslet} alt="Картинка с браслетами"></img>
                             </div>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li><a href="#ssCh" Перенести на>Цепочки</a></li>
                            <div class="small-image-wrapper">
                                <img class="small-image" src= {myImage} alt="Картинка с цепочками"></img>
                            </div>
                        </ul>
                        <ul>
                             <li><a href="#ssPendant" Перенести на>Подвески</a></li>
                             <div class="small-image-wrapper">
                                <img class="small-image" src={myImagePendant} alt="Картинка с подвесками"></img>
                             </div>
                        </ul>
                    </div>
                </div>
                
                <div className="products-wrapper">
                    {formattedProduct}
                </div>
            
                <div className="products-wrapper">
                    {formattedProductBr}
                </div>
                <div className="products-wrapper">
                    {formattedProductCh}
                </div>
                <div className="products-wrapper">
                    {formattedProductP}
                </div>
            </div>
           
        </div>
    );
}

export default Main;