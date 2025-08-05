import componentStyle from './myStyle.module.css'

function MyComponent() {

  return (
    <div>
      <h3 className={componentStyle.title_style}>module.css 스타일 적용</h3>
      <p className={componentStyle.my_style}>스타일이 적용될 영역</p>
    </div>
  );
}

export default MyComponent;