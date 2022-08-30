interface btnProp {
	text: string,
	cls: string,
	click: () => void,
}

const Btn = ({ text, cls, click }: btnProp) => 
    <>
        <span className={cls} onClick={click}>{text}</span>
    </>

export default Btn;
