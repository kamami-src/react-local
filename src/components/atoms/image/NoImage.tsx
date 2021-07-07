import { VFC } from 'react';
import NoImageGazou from '../../../images/no_image.jpg';

export const NoImage: VFC = () => {
    return (
        <img src={NoImageGazou} alt="画像がありません" />
        );
    };
    