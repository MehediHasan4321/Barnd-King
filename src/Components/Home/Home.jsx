import React from 'react';
import Single from './SingleProductSample/Single';
import images from './ImageSlider/Images';
import ImageSlider from './ImageSlider/ImageSlider';
const Home = () => {
    const productSample = [
        {
            id: 1,
            title: 'Soft dresses',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/G/01/PLF/Daily_Ritual/2020/SPRING-DRIVERS/DAILY-RITUAL-COTTON-PUFF-SLEEVE_DT_CC_379x304_1x._SY304_CB410865121_.jpg',
            tag:"Shop Daily Ritual's dresses",
            url:'dresse'
        },
        {
            id: 2,
            title: 'Deals on Top Brands',
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/G/01/Top_Brands/Holiday2021/10_17/10_17_BeautyFashion_379x304._SY304_CB638939725_.jpg',
            tag:"See More",
            url:"topBrand"
        },
        {
            id: 3,
            title: "Customers' most-loved",
            imgUrl: "https://m.media-amazon.com/images/I/61IX7x2YwZL._AC_UY218_.jpg" ,
            tag:"Discover items with 4+ starts",
            url:'smartWatch'
        },
        {
            id: 4,
            title: "Best Sellers in Outlet",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_BS_DSC_379x304._SY304_CB409178716_.jpg",
            tag:"See More"
        },
        {
            id: 5,
            title: 'Small space solutions',
            imgUrl: "https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/OWFhYjJmNGIt/OWFhYjJmNGIt-NzIwODU5ZmIt-w379._SY304_CB405958196_.jpg",
            tag:"Shop small space furniture & decorate"
        },
        {
            id: 6,
            title: "Save on pre-owned Amazon devices",
            imgUrl: "https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YjAwMjVmYjUt/YjAwMjVmYjUt-YmMzZGJjMzYt-w379._SY304_CB410321238_.jpg",
            tag:"See all pre-owned divices"
        },
        {
            id: 7,
            title: "Live plants & planters",
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/MjJkZGVlZDYt/MjJkZGVlZDYt-OGRmN2JmYWEt-w379._SY304_CB410698465_.jpg',
            tag:"Shop plants,plant care & pots"
        },
        {
            id: 8,
            title: "Easy, elevated t-shirts",
            imgUrl: 'https://images-na.ssl-images-amazon.com/images/G/01/softlines/shopbop/ingress/2020/CategoryCards/mp_20200604_fashion_desktopsinglecategory_desktop_379x304._SY304_CB430707313_.jpg',
            tag:"See More"
        }
    ]
    return (
        <div className='container mx-auto mt-20'>
            <div className=' bg-gray-200 h-[40vh]'>
                <ImageSlider images={images}/>
            </div>
            <div className='bg-gray-200 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                {
                    productSample.map(pro => <Single key={pro.id} sample={pro} />)
                }
            </div>
        </div>
    );
};

export default Home;