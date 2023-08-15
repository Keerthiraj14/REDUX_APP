import React, { useState } from "react";
import { Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

const Scanner = (props) => {
    const [scanning, setScanning] = useState(true);

    const onSuccess = (e) => {
        setScanning(false);
        console.log(e.data)
    };

    const handleRescan = () => {
        setScanning(true);
    }

    return (
        <>
            {scanning ? (
                <QRCodeScanner
                    onRead={onSuccess}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    reactivate={true}
                    showMarker={true}
                    topContent={
                        <Text>Scan the QR code</Text>
                    }
                    bottomContent={
                        <Text>Place the QR code within the frame to scan</Text>
                    }
                />
            ) : (
                <>
                    <Text>Scan Complete</Text>
                    <Button title="Rescan" onPress={handleRescan} />
                </>
            )}
        </>
    )
}

export default Scanner;