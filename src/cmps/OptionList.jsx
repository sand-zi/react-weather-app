import { OptionPreview } from "./OptionPreview"
import List from '@mui/material/List';

export const OptionList = ({ options, onSelectLocation }) => {

    return (
        <List>
            {options.map(option => <OptionPreview option={option} key={option.id} onSelectLocation={onSelectLocation} />)}
        </List>
    )
}