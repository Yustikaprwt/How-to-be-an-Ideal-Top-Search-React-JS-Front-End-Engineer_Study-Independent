import "./Home.css"
const ListItem = (props) => {

    const { id, nama, umur, jenis_kelamin } = props.data

    return (
        <tr>
            <td>{id}</td>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenis_kelamin}</td>
        </tr>

    )
}

export default ListItem;