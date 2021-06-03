import styled from 'styled-components';

export const PageContainer = styled.div`
    margin: 7rem 5rem; /** 8rem tiene height del Header */
    margin-bottom: 0;
    position: relative;
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;

    div.arrow-title {

        display: flex;
        align-items: center;

        h3 {
            color: #FFFFFF;
            font-size: 2rem;
            font-family: 'Raleway', sans-serif;
            font-weight: bold;
            text-align: center;
            margin: 0 2rem;
        }

        svg:hover {
            cursor: pointer;
        }

    }

    button {
        border-radius: 10px;
        min-width: 150px;
    }

`;

export const TableWrapper = styled.div`

    .ant-table-wrapper {
        background: #FFFFFF;
        border: .5px solid rgba(0, 0, 0, 0.05);
        border-radius: 15px;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.05);
        width: 100%;
        margin-top: 2rem;
        padding: 2rem;
        padding-left: 2rem;

        .ant-table table {
            
            .ant-table-thead > tr > th {
                background: #FFFFFF !important;
                font-size: 1rem;
                font-weight: 600;
            }

            tbody > tr > td {
                font-size: 1rem;
                font-weight: 300;
            }

            .ant-space-item a {
                
                color: #3590FF;
                display: block;
                position: relative;
                padding: 0.1rem 0;

                &::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 0.05rem;
                    background-color: #3590FF;
                    transition: opacity 300ms, transform 300ms;
                    opacity: 1;
                    transform: scale(0);
                    transform-origin: center;
                }

                &:hover::after,
                &:focus::after {
                    transform: scale(1);
                }
            }
        }
    }


`;