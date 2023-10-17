const clicking = () => {
    console.log("HELLO");
}

export default function AddButton(props) {
    return(
        <button onClick={clicking}>{props.name}</button>
    );
}
