import { VFC } from 'react';
import styled from  'styled-components';

import Nico1 from '../../../images/nico_1.jpg';

export const TopImage: VFC = () => {
    return (
        <SImg src={Nico1} alt="" />
        );
    };
    
const SImg = styled.img`
    height: 500px;
    margin: 0 auto;
    border-radius: 50%;
`;
