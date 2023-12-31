import {List, ListItem, Typography} from "@mui/material";
import React from "react";
import {ValidationEntry} from "@/Interfaces/validationEntry";
import {useTranslation} from "react-i18next";
import '@/i18n';

interface ValidationHistoryProps {
    history: ValidationEntry[];
}

export function ValidationHistoryComponent({history}: ValidationHistoryProps) {
    const {t} = useTranslation();
    return (
        <>
            <Typography fontSize={18} fontWeight={"bold"}>{t('validationHistory')}</Typography>
            <List sx={{
                overflow: 'auto',
                height: 'calc(100vh - 520px)',
            }}>
                {history.map((entry, index) => (
                    <ListItem key={index} className={t(entry.result) === t('reject') ? "bg-red-400" : "bg-green-400"}>
                        <strong className="pr-1">{entry.word}</strong> - {t(entry.result)}
                    </ListItem>
                ))}
            </List>
        </>
    );
}