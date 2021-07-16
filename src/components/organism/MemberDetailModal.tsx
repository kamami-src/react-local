import { memo, useCallback } from "react";
import { Dispatch, ReactElement, SetStateAction, useState, VFC } from "react"

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { LabelInput } from "../atoms/input/LabelInput";
import { MemberType } from "../../types/member";
import { UseAuth } from "../../hooks/UseAuth";

type Props = {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
    target: MemberType | null;
}
export const MemberDetailModal: VFC<Props> = memo((props) => {
    const { show, setShow, target } = props;
    console.log(`memberDetailModalレンダリング`)
    const modalClose = () => setShow(false);
    const { GetAdminFlg } = UseAuth();
    const isAdmin = GetAdminFlg();

    return (
        <>
            <Modal show={show} onHide={modalClose}>
                <Modal.Header closeButton>
                <Modal.Title>{target?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LabelInput label="ID" name="id" defaultValue={target?.id} readOnly={!isAdmin} />
                    <LabelInput label="名前" name="name" defaultValue={target?.name} readOnly={!isAdmin} />
                    <LabelInput label="ユーザ名" name="username" defaultValue={target?.username} readOnly={!isAdmin} />
                    <LabelInput label="メール" name="email" defaultValue={target?.email} readOnly={!isAdmin} />
                    <LabelInput label="住所" name="address" defaultValue={target?.address?.city} readOnly={!isAdmin} />
                    <LabelInput label="電話番号" name="phone" defaultValue={target?.phone} readOnly={!isAdmin} />
                    <LabelInput label="WEB" name="website" defaultValue={target?.website} readOnly={!isAdmin} />
                    <LabelInput label="勤務先" name="company" defaultValue={target?.company?.name} readOnly={!isAdmin} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={modalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={modalClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
});