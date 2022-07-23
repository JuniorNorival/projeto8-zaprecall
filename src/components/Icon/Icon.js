

export default function Icons({ result }) {

    if (result === 'acerto') {

        return (
            <>
                <ion-icon name="checkmark-circle-sharp"></ion-icon>
            </>

        )
    } else if (result === 'erro') {
        return (
            <ion-icon name="close-circle-sharp"></ion-icon>
        )
    }
    else if (result === 'duvida') {
        return (
            <ion-icon name="help-circle-sharp"></ion-icon>
        )
    }
return null;


}