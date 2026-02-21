import { useEffect, useState } from "react";
import DisneyCharacters from "./components/DisneyCharacters";
import type { DisneyCharacter } from "./interfaces/DisneyCharacter";

export default function App() {
    const [data, setData] = useState<DisneyCharacter[]>([]);
    useEffect(() => {
        async function fetchData(): Promise<void> {
            const rawData = await fetch("https://api.disneyapi.dev/character");
            const { data }: { data: DisneyCharacter[] } = await rawData.json();
            setData(data);
        }
        fetchData()
            .then(() => console.log("Data fetched successfully."))
            .catch((e: Error) => console.log("There was the error: " + e));
    }, []);

    return(
        <div className="App">
            <DisneyCharacters data={data} />
        </div>
    )
}

