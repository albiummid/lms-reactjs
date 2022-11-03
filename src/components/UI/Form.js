export const FormGroup = ({ label, children, className }) => {
  return (
    <div>
      <label className={`block my-2 font-semibold ${className}`} htmlFor=''>
        {label}
      </label>
      {children}
    </div>
  )
}
