import React from 'react'
import myStyle from './style.module.css'

const Container = () => {
  return (
    <section className={myStyle.gridCont}>
        {/* grid section */}
        <div className={myStyle.galleryPhotos}>
            <div>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img1.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Perfect way to decorate your work space</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
                {/* <div className={myStyle.containerIcon}>
                    <i class="fa-solid fa-share-nodes"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-pinterest"></i>
                </div> */}
            </div>
            <div>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img2.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Minimal design with a hint of a colour</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div>
                {/* <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img1.jpg" alt="" /> */}
                <p className={myStyle.spanStyle}>Lifestyle/ June 15, 2017</p>
                <p className={myStyle.h1Style2}>Wisi ut enim ad minim veniam, <br /> quis nostrud exerci tation ullam <br /> corper suscipit velit esse verim <br /> molestie per</p>
                <hr style={{width:"40px", color:"#fcb900"}} />
                <p>BY Janet Martinez</p>
            </div>
            <div className={myStyle.gridAdjust16}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img3.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>The best way to start your morning</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img4.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Set the goals and make them possible</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            {/* ----------/----------- */}
            <div className={myStyle.gridAdjust}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img6.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>New Trend &#8211; White Architecture Elements</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div className={myStyle.gridAdjust2}>
                {/* <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img1.jpg" alt="" /> */}
                <p className={myStyle.spanStyle}>Lifestyle/ June 15, 2017</p>
                <p className={myStyle.h1Style2}>Wisi ut enim ad minim veniam, <br /> quis nostrud exerci tation ullam <br /> corper suscipit velit esse verim <br /> molestie per</p>
                <hr style={{width:"40px", color:"#fcb900"}} />
                <p>BY Janet Martinez</p>
            </div>
            <div className={myStyle.gridAdjust3}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img5.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Plant Patterns Are New Interior Must Have</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div className={myStyle.gridAdjust4}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img7.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Free Spirit For Adventurous Trips</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div className={myStyle.gridAdjust5}>
                {/* <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img1.jpg" alt="" /> */}
                <p className={myStyle.spanStyle}>Lifestyle/ June 15, 2017</p>
                <p className={myStyle.h1Style2}>Wisi ut enim ad minim veniam, <br /> quis nostrud exerci tation ullam <br /> corper suscipit velit esse verim <br /> molestie per</p>
                <hr style={{width:"40px", color:"#fcb900"}} />
                <p>BY Janet Martinez</p>
            </div>
            {/* ----------/----------- */}
            <div className={myStyle.gridAdjust6}>
                <img className={myStyle.imgG} src="https://theremotehive.com/wp-content/uploads/2020/09/freelancer.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Pros And Cons Of Freelance Work</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div className={myStyle.gridAdjust7}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img10.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Fast Organization Of Your Work Space</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div className={myStyle.gridAdjust8}>
                <img className={myStyle.imgG} src="https://miro.medium.com/v2/resize:fit:1024/0*CrXrR85_1Ec-4kh2.png" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Creativity Is The Great Way To Explore</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div className={myStyle.gridAdjust9}>
                {/* <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img1.jpg" alt="" /> */}
                <p className={myStyle.spanStyle}>Lifestyle/ June 15, 2017</p>
                <p className={myStyle.h1Style2}>Wisi ut enim ad minim veniam, <br /> quis nostrud exerci tation ullam <br /> corper suscipit velit esse verim <br /> molestie per</p>
                <hr style={{width:"40px", color:"#fcb900"}} />
                <p>BY Janet Martinez</p>
            </div>
            <div className={myStyle.gridAdjust10}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img9.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Minimal Interiors With Pastel Colour Palettes</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>

            {/* ----------/----------- */}
            <div className={myStyle.gridAdjust11}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img16.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Keep Exploring Every Part Of The World</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div className={myStyle.gridAdjust12}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img15.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Having A Time For Yourself is Essential</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div className={myStyle.gridAdjust13}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img12.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Plastic Designer Chairs Are Very Popular</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div className={myStyle.gridAdjust14}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img14.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>New Decorations On Building Facades</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
            <div className={myStyle.gridAdjust15}>
                <img className={myStyle.imgG} src="https://alecta.qodeinteractive.com/wp-content/uploads/2017/06/h10-img13.jpg" alt="" />
                <p className={myStyle.pStyle}><span className={myStyle.spanStyle}>Lifestyle/</span> June 15, 2017</p>
                <h1 className={myStyle.h1Style}>Games Are The Key For Creative Work</h1>
                <p>Duis autem vel eum iriure dolor in hendrerit in vul velit esse molestie consequat vel illum veridolore eu fer feugiat nulla..... </p>
            </div>
        </div>
        {/* button */}
        <div className='text-center pt-5'><button className='btn btn-danger text-light rounded-5 btn-lg font-weight-bold'>LOAD MORE</button></div>
        {/* purchase */}
        <div className={myStyle.purchaseDiv}>
            <div><i className={myStyle.purchaseH1}>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit</i></div>
            <div><button className='btn btn-light text-dark btn-lg rounded-5  font-weight-bold'>PURCHASE</button></div>
        </div>
    </section>
  )
}

export default Container