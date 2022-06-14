import { AiOutlineUnorderedList } from 'react-icons/ai';
import { FiYoutube, FiPlay } from 'react-icons/fi';
import { BsTrophyFill } from 'react-icons/bs';
import { Button } from '../Button/Button';
import { bool, string, number, oneOfType } from 'prop-types';
import styles from './stylesheets/purchaseCard.module.css';
import { useTheme } from '../../hooks';

interface PurchaseCard {
    type: "path" | "module"
    price: string | number
    noOfModules: string | number
    hours: string | number
    certificate: boolean
    img: string
}

export const PurchaseCard = ({type, price, noOfModules, hours, certificate, img}: PurchaseCard): JSX.Element =>{
    const theme = useTheme();
    return (
        <div className={styles.pc_wrapper} style={{...theme?.themeStyles}}>
            <div className={styles.pc_image} style={{backgroundImage: `url('${img}')`}}>
                {/* <img src={img} alt="Loading..." /> */}
                <div className={styles.pc_filter}>
                    <div className={styles.pc_vid_ctrls}>
                        <button><FiPlay fontSize={18} /></button>
                        <span>Watch Preview</span>
                    </div>
                </div>
            </div>
            <div className={styles.pc_info}>
                <span>Ksh {price}</span>
                <span><AiOutlineUnorderedList fontSize={18} style={{marginRight: `10px`}} />{ noOfModules } {type === `path` && `modules`} {type === `module` && `series`}</span>
                <span><FiYoutube fontSize={18} style={{marginRight: `10px`}} />{ hours } hours of video content</span>
                {certificate && <span><BsTrophyFill fontSize={18} style={{marginRight: `10px`}} />Earn a Cerificate on Completion</span>}
                <Button label={`Purchase`} />
                <Button label={`Save`} styling={{background: `none`, border: `0.5px solid rgb(15, 39, 73)`, color: theme?.themeStyles.color}} />
            </div>
        </div>
    )
}

PurchaseCard.propTypes = {
    type: string,
    price: oneOfType([string, number]),
    noOfModules: number,
    hours: number,
    certificate: bool,
}