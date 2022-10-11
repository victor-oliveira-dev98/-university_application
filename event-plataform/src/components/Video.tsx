import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";
import { gql, useQuery } from "@apollo/client";

import '@vime/core/themes/default.css';


const GET_LESSONS_BY_SLUG_QUERY = gql `
    query GetLessonBySlug ($slug: String) 
    {
        lesson(where: {slug: $slug})
        {
        title
        videoId
        description
        teacher{
            bio
            avatarURL
            name
        }

    }
}
`

interface GetLessonBySlugResponse {
    lesson: {
        title: string;
        videoId: string;
        description: string;
        teacher: {
            bio: string;
            avatarURL: string;
            name: string;

        }
    }
}

interface VideoProps {
    lessonSlug: String;
}

export function Video(props: VideoProps){
    const {data} = useQuery <GetLessonBySlugResponse>(GET_LESSONS_BY_SLUG_QUERY, {
        variables: {
            slug: props.lessonSlug,
        }
    })

    if (!data)
    {
        return(
        <div className="flex-1">
         <p> Loading...</p>
         </div>
        )
    }

    return(
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                    <Player> 
                        <Youtube videoId={data.lesson.videoId} />
                        <DefaultUi />
                    </Player>
                </div>
            </div>

            <div className="p-8 max-w-[1100px] mx-auto">
                <div className="flex items-start gap-16">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold text-gray-800">
                            {data.lesson.title}
                        </h1>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            {data.lesson.description}
                        </p>
                        <div className="flex items-center gap-2 mt-6">
                            <img className="h-16 w-16 rounded-full border-2 border-blue-800"
                            src={data.lesson.teacher.avatarURL} 
                            alt="" 
                            />

                            <div className="leading-relaxed ">
                                <strong className="font-bold text-2xl block text-gray-800">
                                    {data.lesson.teacher.name}</strong>
                                <span className="text-gray-600 text-sm block ">{data.lesson.teacher.bio}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <a href="" className="p-4 text-sm bg-green-400 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
                            <DiscordLogo size={24} />
                            Comunidade do Discord
                        </a>
                        <a href="" className="p-4 text-sm border border-blue-800 text-blue-800 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-800 hover:text-gray-900 transition-colors">
                            <Lightning size={24} />
                            Acesse o desafio
                        </a>
                    </div>

                </div>
                <div className="gap-8 mt-20 grid grid-cols-2">
                    <a  href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />

                        </div>
                        <div className="py-1 leading-relaxed">
                            <strong className="text-2xl">Material Complementar</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Acesse o material complementar para acelerar o seu desenvolvimento
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight />
                        </div>
                    </a>

                    <a  href="" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
                        <div className="bg-green-700 h-full p-6 flex items-center">
                            <FileArrowDown size={40} />

                        </div>
                        <div className="py-1 leading-relaxed">
                            <strong className="text-2xl">Wallpapers exclusivos</strong>
                            <p className="text-sm text-gray-200 mt-2">
                                Baixe wallpapers exclusivos do Técnologia e Arte e personalize a sua máquina
                            </p>
                        </div>
                        <div className="h-full p-6 flex items-center">
                            <CaretRight />
                        </div>
                    </a>
                                 
                </div>

            </div>

            <footer className="bg-blue-800 flex gap-8 pt-4 border border-blue-600 items" >
               <p className="p-2 flex ">  Universidade Campinas de Goiás</p> 
               <p className="text-gray-400 p-2">Todos os direitos reservados</p>
            </footer>
        </div>
    )
}