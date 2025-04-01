export default function Content (props){
    const {image, name , category, desc}= props;
    return(
        <>
            <div className="w-[400px] h-[500px] border border-gray-300 rounded-lg">
                <div className="w-[360px] block m-auto mt-[10px] mb-[15px]">
                    <img src={image} alt="" className="w-[360px]"/>
                </div>
                <h1 className="font-bold text-center text-xl mb-[10px]">{name}</h1>
                <p className="p-[10px] bg-slate-200 w-[360px] block m-auto"><span className="font-bold">Category :</span> {category}</p>
                <p className="pl-[20px] pr-[15px] mt-[10px]">{desc}</p>
            </div>
        </>    
    )
}