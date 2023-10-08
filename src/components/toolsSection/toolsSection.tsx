import React, {ChangeEvent, useState} from 'react';
import {Box, Paper, Slider, TextField, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import {useTranslation} from 'react-i18next';
import '@/i18n';
import ValidateSection from "@/components/validateSection/validateSection";

interface ToolsSectionProps {
    onWordsChanged: (words: string) => void;
    inputWords: string,
    onFinishedValidation: (word: string, result: string) => void;
    onStateChanged: (currentState: string, newState: string) => void
 }

const ToolsSection: React.FC<ToolsSectionProps> = ({onWordsChanged, inputWords, onFinishedValidation, onStateChanged}) => {

    const [automatonSpeed, setAutomatonSpeed] = useState(50)

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const words = e.target.value;
        onWordsChanged(words);
    };

    const handleAutomatonSpeedChange = (e: Event, newValue: number | number[]) => {
        if (typeof newValue === 'number')
            setAutomatonSpeed(newValue)
    };

    const getValidationSpeed = () => 500 / (automatonSpeed / 100);

    const {t} = useTranslation();
    return (
        <Paper elevation={4} className="h-90">
            <div className="p-6">
                <Grid container>
                    <Grid item xs={12}>
                        <Typography className='pb-4'>{t("re")}<sup>4</sup></Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label={t("word")}
                            multiline
                            defaultValue=""
                            fullWidth
                            minRows={4}
                            maxRows={10}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} className="mt-6">
                        <Box>
                            <Typography>{t("speed")}</Typography>
                            <Slider
                                value={automatonSpeed}
                                aria-label="Default"
                                valueLabelDisplay="auto"
                                min={10}
                                onChange={(e, newValue) => handleAutomatonSpeedChange(e, newValue)}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <ValidateSection
                            inputString={inputWords}
                            validationSpeed={getValidationSpeed()}
                            onFinishedValidation={onFinishedValidation}
                            onStateChanged={onStateChanged}
                        />
                    </Grid>
                </Grid>
            </div>
        </Paper>
    );
};

export default ToolsSection;
