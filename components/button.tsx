const Btn = ({ text, cls, click }) => 
    <>
        <span className={cls} onClick={click}>{text}</span>
    </>

export default Btn;
