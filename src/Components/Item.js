import { Paper, Button } from '@mui/material'


function Item(item)
{
    return (
        <Paper>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}
export default Item