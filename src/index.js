import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar";
import Content from "./components/Content";
import History from "./components/History";
import "./index.css"
const root = createRoot(document.getElementById("root"));


root.render(<h1>
    <Navbar />
    <History />
    <h1 className="font-bold text-3xl pb-[20px] ml-[500px] w-80 bg-cyan-500">Attraction in Nashik</h1>

    <div className="flex gap-10 w-[70%] flex-wrap m-auto justify-between mt-[100px]">
        <Content
            image="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/27/cd/13/the-beautiful-temple.jpg?w=900&h=500&s=1"
            name="Kalaram Mandir"
            category="Historic, Religious"
            desc="Kalaram Mandir, a revered Hindu temple in Nashik, is dedicated to Lord Rama and holds immense spiritual significance, attracting pilgrims and tourists alike."
        />
        <Content
            image="https://static.india.com/wp-content/uploads/2022/09/nashik.png"
            name="Navasa Ganpati Temple"
            category=" Historic, Religious"
            desc="Navasa Ganpati Temple, located in Nashik, is a revered shrine dedicated to Lord Ganesha, known for its unique architecture and spiritual significance."
        />
        <Content
            image="https://sulavineyards.com/images/source/source-banner-poster.jpg"
            name="Sula Vineyards"
            category="Vineyard"
            desc="Sula Vineyards, located in Nashik, is a renowned winery known for its picturesque vineyards and award-winning wines, attracting wine enthusiasts and tourists."/>
        <Content
            image="https://www.thefreebird.net/wp-content/uploads/2024/11/09-2019-08-17.jpg"
            name="Anjneri Hill"
            category="Natural"
            desc="Anjneri Hill, located near Nashik, is a scenic hill known for its trekking trails, ancient temples, and panoramic views, making it a popular destination for nature lovers."
        />
        <Content
            image="https://s7ap1.scene7.com/is/image/incredibleindia/1-shri-saptashrungi-gad-nashik-maharashtra-attr-hero?qlt=82&ts=1726669996102"
            name="Saptashrungi"
            category="Natural"
            desc="Saptashrungi, located near Nashik, is a sacred hill known for its ancient temple dedicated to Goddess Saptashrungi, attracting pilgrims and nature enthusiasts."
        />
        <Content
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN_UMHaGvXU4lcB4pqhDkBUYNUE6F9EYBmSg&s"
            name="Pandav Leni Caves"
            category="Historic"
            desc="Pandav Leni Caves, located near Nashik, are ancient rock-cut Buddhist caves known for their intricate carvings and historical significance, attracting history enthusiasts."
        />
    </div>

</h1>
)
