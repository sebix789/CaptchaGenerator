import styled from "styled-components";

export const Back = styled.div`
  display: flex;
  text-align: center;
  float: left;
  margin: 2rem 4rem 4rem 2rem;
`
export const Auto = styled.div`
  clear:both;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items:center;
  margin: 1rem;
  gap:1rem;
`
export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  text-align: center;
  gap: 1rem;
`
export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 2rem;
  flex-direction: column;
  gap: 1rem;
`
export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem;
  flex-direction: column;
  gap: 1rem;
`
export const Result = styled.div`
  clear:both;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items:center;
  margin: 1rem;
`
export const Photos = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap:1rem;
  img {
    width: 6rem;
    height: 6rem;
    object-fit: cover; /* Optional: Ensures the image covers the area without distortion */
  }
`