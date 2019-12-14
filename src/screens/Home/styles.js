import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: #fff; /* Blackberry plum Color Palette */
`;

export const Content = styled.View`
    flex: 1;
    max-height: 120px;
    margin: 10px 0 20px 0;
`;

export const Card = styled.View`
    flex: 1;
    margin: 0 20px;
    border-radius: 14px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

export const CardContent = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const CardImage = styled.Image`
    width: 150px;
    height: 150px;
`;

export const CardTitle = styled.Text`
    flex: 2;
    font-size: 23px;
    font-weight: bold;
    text-shadow: 0.2px 0.2px 4px #494949;
    color: #FFF;
`;