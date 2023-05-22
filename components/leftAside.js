import Principal from '@/pages/principal'
import Link from 'next/link'
import React from 'react'

export default function LeftAside() {
  return (
    <aside class="col-3">
          <ul class="nav flex-column">
            <li class="nav-item bg-primary mt-1 mb-1 " >
                <Link class="nav-link text-white active" href='/student'>student-appRoute</Link>
            </li>
            <li class="nav-item bg-primary mt-1 mb-1">
                <Link class="nav-link text-white" href="/teacher">teacher-appRoute</Link>
            </li>
            <li class="nav-item bg-primary mt-1 mb-1">
                <Link class="nav-link text-white" href="/principal"> Principal - PageRoute</Link>
            </li>
            <li class="nav-item bg-primary mt-1 mb-1">
                <Link class="nav-link text-white" href="/parents"> parents - PageRoute</Link>
            </li>
          </ul>
    </aside>
  )
}
