import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
export const OptionPreview = ({ option, onSelectLocation }) => {

    const optionName = `${option.localizedName} - ${option.country}`

    const selectLocation = () => {
        
        onSelectLocation(option)
    }

    return (
        <ListItem className="option-preview" key={option.id} button onClick={selectLocation}>
            <ListItemText primary={optionName} />
        </ListItem>
    )
}