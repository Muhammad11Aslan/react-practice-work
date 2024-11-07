import SendPropsOneFileToAnother from "./SendPropsOneFileToAnother";
import { useState } from "react";
export function PropsConcept() {
    const [Name, setName] = useState("Anil")

    return (
        <>
            <h1 style={{ backgroundColor: 'green' }}>Well come to function component and manage state</h1>
            {/* <h1 style={{ backgroundColor: 'green' }}>Well To Props page</h1>
            <SendPropsOneFileToAnother name={"Aslan"} other={{ address: "Pattoki", age: 22 }} /> */}
            <SendPropsOneFileToAnother name={Name} />
            <button type="button" onClick={() => setName("Peter")}>UpdateValue</button>
        </>
    )
}

