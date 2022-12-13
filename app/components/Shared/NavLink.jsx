import Link from 'next/link'

export const RegularLink = ({ children, ...rest }) => <a {...rest}>{children}</a>

export function NavLink({ isA, href, children }) {
  let Wrapper = isA ? RegularLink : Link;


  return (
    <Wrapper
      href={href}
      className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Wrapper>
  )
}
