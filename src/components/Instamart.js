import { useState } from "react";

const Section = ({ title, content, visiblity, setIsVisible }) => {
    console.log(title);
    return (
        <div className="border m-4 p-2 border-stone-600">
            <h2 className="text-xl">{ title }</h2>
            {
                visiblity ?
                <button className="underline text-xs" onClick={() => {
                    setIsVisible(false);
                }}>Hide</button> :                
                <button className="underline text-xs" onClick={() => {
                    setIsVisible(true);
                }}>Show</button>
            }
            { visiblity && <p>{ content }</p> }
        </div>
    )
}

const Instamart = () => {

    const [sectionConfig, setSectionConfig] = useState({
        showIntro : false,
        showTeam : false,
        showMotive : false,
    })

    return (
        <>
            <h1 className="p-4 bg-amber-700 text-white font-bold text-center text-2xl">This is Instamart</h1>
            <Section
                title = {"Introduction"}
                content = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                visiblity = { sectionConfig.showIntro }
                setIsVisible={(boolean)=>{
                    setSectionConfig({
                        showIntro : boolean,
                        showTeam : false,
                        showMotive : false,
                    })
                }}
            />
            <Section
                title = {"Team"}
                content = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                visiblity = { sectionConfig.showTeam }
                setIsVisible={(boolean)=>{
                    setSectionConfig({
                        showIntro : false,
                        showTeam : boolean,
                        showMotive : false,
                    })
                }}
            />
            <Section
                title = {"Motive"}
                content = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                visiblity = { sectionConfig.showMotive }
                setIsVisible={(boolean)=>{
                    setSectionConfig({
                        showIntro : false,
                        showTeam : false,
                        showMotive : boolean,
                    })
                }}
            />
        </>
    );
}

export default Instamart;