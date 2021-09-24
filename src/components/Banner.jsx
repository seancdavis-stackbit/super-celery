export default function Banner(props) {
    const { headline } = props;
    const cssClasses = props.className || null;
    const cssId = props.elementId || null;
    const annotationPrefix = props.annotationPrefix || '';

    if (!label) {
        return null;
    }

    return (
        <div
            id={cssId}
            className={classNames('sb-component', 'sb-component-block', 'sb-component-badge', cssClasses)}
            data-sb-field-path={`${annotationPrefix}.label ${annotationPrefix}.elementId#@id`}
        >
            {label}
        </div>
    );
}