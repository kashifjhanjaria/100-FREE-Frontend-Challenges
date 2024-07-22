import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  // const {hello} = NavLink;
  // console.log(hello);
  return (
    <>
    
    <div className="flex-shrink-0 w-64 bg-gray-900">
        <NavLink to="/">
          <div
            className="flex items-center h-16 px-4 bg-gray-900 text-xl text-white font-medium"
          >
            <svg
              className="relative w-8 h-8 fill-current"
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="989.000000pt"
              height="920.000000pt"
              viewBox="0 0 989.000000 920.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,920.000000) scale(0.100000,-0.100000)"
                stroke="none"
              >
                <path
                  d="M4755 8216 c-77 -22 -103 -34 -140 -62 -38 -29 -94 -109 -116 -167
l-15 -38 -32 50 c-37 57 -83 96 -162 137 -49 25 -65 29 -145 29 -80 0 -97 -3
-155 -31 -69 -33 -127 -83 -164 -142 -27 -44 -56 -126 -56 -160 0 -23 -4 -21
-55 27 -101 96 -226 130 -353 97 -150 -38 -254 -150 -282 -304 -6 -33 -8 -72
-4 -86 8 -33 3 -33 -48 4 -51 37 -154 70 -218 70 -26 0 -78 -9 -115 -21 -56
-17 -77 -30 -129 -82 -34 -34 -71 -82 -83 -107 -42 -92 -51 -201 -21 -279 5
-13 7 -25 5 -27 -1 -2 -31 6 -66 16 -96 30 -181 24 -276 -21 -144 -68 -235
-242 -205 -393 7 -33 22 -81 35 -106 l23 -45 -62 3 c-125 7 -257 -62 -326
-170 -47 -72 -64 -139 -58 -232 6 -88 39 -166 97 -229 23 -24 41 -47 41 -49 0
-3 -15 -8 -34 -11 -63 -10 -146 -59 -197 -116 -68 -76 -93 -144 -94 -251 0
-77 3 -92 33 -152 36 -74 120 -159 177 -179 20 -7 34 -16 33 -20 -2 -4 -23
-22 -47 -40 -137 -105 -181 -303 -103 -461 54 -110 163 -192 273 -205 27 -3
49 -9 49 -13 0 -5 -15 -31 -34 -58 -44 -65 -60 -134 -54 -230 7 -95 32 -154
89 -211 61 -60 108 -90 175 -111 l58 -17 14 -69 c16 -84 56 -202 90 -269 79
-158 236 -332 398 -442 95 -65 104 -78 104 -152 0 -48 59 -257 116 -412 204
-557 535 -979 971 -1236 54 -31 125 -67 158 -79 33 -12 98 -36 145 -54 141
-53 317 -99 465 -122 188 -29 586 -31 770 -4 517 76 894 261 1220 597 309 319
540 764 651 1254 18 82 38 151 44 153 22 8 168 118 225 170 64 59 165 172 165
185 0 5 18 39 40 75 56 95 95 196 121 311 22 97 23 99 54 104 58 10 130 51
192 112 54 53 64 69 84 134 35 118 14 245 -57 338 -13 17 -24 34 -24 36 0 2
22 7 48 9 114 11 229 97 283 211 50 107 49 227 -3 330 -23 46 -92 123 -131
147 l-29 18 62 33 c73 39 122 92 162 176 25 53 30 74 29 140 0 91 -17 147 -67
220 -51 75 -132 131 -214 148 -52 11 -53 13 -15 46 19 17 52 65 72 107 35 70
38 82 38 161 -1 65 -6 100 -24 143 -31 80 -106 159 -188 200 -57 28 -76 32
-149 32 -52 1 -82 5 -80 11 53 118 58 139 54 219 -6 99 -42 177 -115 247 -113
110 -260 136 -407 74 -17 -7 -18 -5 -12 16 4 13 10 56 13 95 12 159 -69 297
-217 368 -58 28 -75 31 -155 31 -77 0 -99 -4 -148 -27 -32 -15 -71 -37 -88
-48 l-29 -21 0 54 c0 146 -83 274 -220 341 -58 28 -75 31 -155 31 -80 0 -97
-4 -157 -32 -37 -17 -87 -51 -111 -76 l-45 -44 -15 62 c-33 134 -94 212 -205
263 -48 22 -71 26 -152 26 -84 1 -102 -2 -150 -26 -71 -35 -135 -90 -171 -147
-24 -37 -29 -41 -35 -25 -38 115 -124 207 -220 238 -77 25 -176 30 -239 12z
m645 -2766 c671 -35 983 -127 1192 -349 108 -114 145 -195 159 -343 17 -187
23 -801 10 -1028 -28 -491 -48 -595 -152 -803 -77 -153 -161 -270 -279 -387
-90 -90 -233 -210 -250 -210 -3 0 -23 35 -45 77 -22 42 -61 110 -88 150 -26
39 -51 83 -56 95 -15 41 -132 191 -201 259 -215 212 -481 292 -920 276 -268
-10 -420 -47 -571 -139 -117 -71 -253 -211 -354 -363 -44 -66 -83 -122 -86
-125 -3 -3 -34 -56 -69 -118 l-62 -113 -27 17 c-80 51 -255 211 -325 298 -103
127 -199 300 -255 459 -43 124 -72 417 -87 892 -6 207 8 647 26 804 29 259
295 490 655 570 156 34 436 67 670 80 222 12 892 12 1115 1z m-2905 -1301 l43
-11 31 -126 c17 -70 31 -136 31 -148 0 -11 31 -150 69 -309 39 -159 69 -291
67 -292 -8 -8 -130 89 -193 152 -150 152 -233 333 -234 517 0 36 5 84 12 108
15 49 66 106 101 113 13 2 24 5 26 6 2 0 23 -4 47 -10z m4827 -10 c30 -16 66
-72 79 -122 28 -113 -23 -325 -111 -460 -27 -40 -84 -106 -127 -147 -78 -75
-186 -154 -191 -141 -1 4 37 169 84 366 48 198 94 392 103 430 16 65 19 71 51
82 35 12 80 9 112 -8z m-2212 -1564 c194 -35 301 -87 426 -207 100 -97 137
-147 132 -184 -7 -60 -87 -84 -278 -84 -178 0 -271 35 -311 118 -14 28 -30 45
-47 50 -35 9 -307 9 -353 -1 -27 -5 -39 -14 -43 -31 -25 -101 -185 -153 -406
-134 -104 9 -152 26 -175 62 -15 23 -15 27 0 60 9 19 61 79 115 134 136 137
223 181 430 216 52 9 106 18 120 20 54 10 300 -2 390 -19z"
                />
                <path
                  d="M3811 4311 c-151 -57 -248 -201 -239 -356 9 -138 88 -253 216 -313
49 -23 70 -27 147 -27 82 0 97 3 157 33 93 46 146 107 176 203 29 95 28 149
-3 247 -21 64 -35 87 -73 125 -72 71 -138 99 -241 104 -68 3 -97 -1 -140 -16z"
                />
                <path
                  d="M5673 4316 c-107 -35 -194 -118 -234 -224 -29 -79 -24 -194 12 -272
32 -69 104 -140 177 -176 49 -24 70 -28 147 -28 78 -1 97 3 145 26 87 43 135
90 176 174 34 67 38 83 37 152 0 141 -69 255 -195 322 -54 29 -75 34 -143 37
-49 2 -96 -3 -122 -11z"
                />
                <path
                  d="M1392 3780 c-151 -107 -192 -151 -243 -257 -60 -125 -73 -198 -73
-408 0 -168 3 -204 26 -315 25 -116 86 -312 137 -439 44 -109 159 -340 241
-481 369 -641 780 -1044 1200 -1178 75 -24 101 -27 220 -27 l135 1 150 63
c178 75 200 92 200 159 0 40 -10 62 -61 147 -34 55 -132 219 -219 365 -86 146
-166 275 -178 287 -22 25 -74 39 -105 28 -12 -3 -77 -48 -147 -100 -107 -81
-132 -95 -164 -95 -70 0 -151 69 -281 240 -65 86 -399 643 -440 734 -62 138
-72 250 -27 302 12 14 85 54 162 90 78 36 150 76 164 91 41 47 28 95 -76 268
-50 83 -150 250 -222 373 -182 307 -182 307 -399 152z"
                />
              </g>
            </svg>

            <div className="ml-2" >100</div>
          </div>
        </NavLink>
        <div>
          <div className="px-2 py-2">
            <div>
           
            </div>
          </div>
          
     
          <div className="px-6 py-6 border-t border-gray-700">
            <h4
              className="text-sm text-gray-600 uppercase font-bold tracking-widest"
            >
              Resources
            </h4>
            <ul className="mt-3 text-white">

            <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="e-commerce" className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? " text-red-900" : ""
  } >
              E-commerce
                </NavLink>
              
              </li>

              <li className="mt-1 hover:bg-red-500 py-1 px-1 rounded-lg">
                <NavLink to="faq" className={``}>
                  FAQ
                </NavLink>
              </li>
             
              <li className="mt-1 mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
                <NavLink to="passwordgenerator">
                Password Generator
                </NavLink>
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="modal" >
                Modal
                </NavLink>
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="passwordchecker" >
                Password Checker
                </NavLink>
              </li>
              <li className="mt-1 mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
                <NavLink to="musicevent">
                Music Events
                </NavLink>
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="formwithcontrol" >
                Form with Control component
                </NavLink>
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="formwithuncontrol" >
              Form with UnControl component
                </NavLink>
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="formwithuseformhook" >
              Form with UFH
                </NavLink>
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="randomuser" >
              Random User
                </NavLink>
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="usefetchcustomhook" >
              Random User with Custom Hook
                </NavLink>
              </li>

              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="counterwithuseState" >
              Counter (useState)
                </NavLink>
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="counterwithusereducer" >
              Counter (useReducer)
                </NavLink>
              
              </li>
             
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="nameandnumber" >
              Name and Number Form
                </NavLink>
              
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="todoapp" >
              Todo App
                </NavLink>
              
              </li>

              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="timer" >
              Timer
                </NavLink>
              
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="debouncing" >
              Debouncing
                </NavLink>
              
              </li>
              <li className="mt-3 hover:bg-red-500 py-1 px-1 rounded-lg">
              <NavLink to="throttling" >
              Throttling
                </NavLink>
              
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar