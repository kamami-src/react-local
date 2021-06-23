import Nico1 from '../../../images/nico_1.jpg';
import styled from  'styled-components';

const SImg = styled.img`
    height: 500px;
    margin: 0 auto;
    border-radius: 50%;
`;

export const TopImage = () => {
    return (
        <SImg src={Nico1} alt="" />
    );
};
