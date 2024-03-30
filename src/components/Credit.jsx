export function Credit() {
    return (
        <>
        <image src={"./image/logo.png"} transparent style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            width: '50px',
            height: '50px',
            zIndex: '100',
            backgroundColor: 'rgb(255, 255, 255)',
        }} />
        <a href="https://instagram.com/tjdwn_.firo" target="_blank" style={{
            position: 'absolute',
            bottom: '20px', 
            right: '20px',
            backgroundColor: '#fff',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '12px',
            fontFamily: 'Wanted Sans',
            textDecoration: 'none',
            color: '#000'
        }}
        >개발자 인스타 : @tjdwn_.firo</a>
        </>
    );
}