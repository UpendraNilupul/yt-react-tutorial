function Main(props) {
    const name = 'Milk tea'
    
    return (
        <div>
            This is main component
            <ul>
                <li>Beverages
                    <ul>
                    <li>Coffee</li>
                    <li>Tea</li>
                    <li>{name}</li>
                    </ul>
                </li>
                <li>Snacks
                    <ul>
                    <li>Chips</li>
                    <li>Cookies</li>
                    <li>{props.children}</li>
                    </ul>
                </li>
                </ul>

        </div>

    );
}

export default Main;