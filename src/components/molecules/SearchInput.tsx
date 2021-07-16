import { memo } from "react";
import { VFC } from "react";
import styled from "styled-components";
import { BaseButton } from "../atoms/button/BaseButton";
import { BaseInput } from "../atoms/input/BaseInput";

export const SearchInput: VFC = memo(() => {
    console.log("SearchInput")
    return (
        <SContainer>
            <BaseInput name="search" placeholder="検索条件を入力してください"></BaseInput>
            <BaseButton>検索</BaseButton>
        </SContainer>
    )
})

const SContainer = styled.div`
    display: flex;
    align-items: center;
`