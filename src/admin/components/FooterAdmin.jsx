import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'

const FooterComponent = () => {
  return (
    <footer className='admin-footer'>
      <Container className=''>
        <Row>
          <Col className='kontak mt-5'>
            <h5 className='text-light text-center'>Kontak Kami</h5>
            <div className='ms-3'>
              {' '}
              <Link
                to='#'
                className='text-decoration-none d-flex align-items-center text-secondary my-2'
              >
                <i className='fa-brands fa-whatsapp me-2'></i>
                <p className='m-0'>0812345678910</p>
              </Link>
              <Link
                to='#'
                className='text-decoration-none d-flex align-items-center text-secondary my-2'
              >
                <i className='fa-regular fa-envelope me-2'></i>
                <p className='m-0'>kppn.palu@kemenkeu.go.id</p>
              </Link>
              <Link
                to='https://www.instagram.com/kppnpalu/'
                className='text-decoration-none d-flex align-items-center text-secondary'
              >
                <i className='fa-brands fa-instagram me-2'></i>
                <p className='m-0'>kppnpalu</p>
              </Link>
            </div>
          </Col>

          <Col className='mt-5 text-center'>
            <h3 className='fw-bold text-light'>KPPN PALU</h3>
            <p className='text-secondary'>
              Hak Cipta Direktorat Jenderal Perbendaharaan (DJPb) <br />{' '}
              Kementerian Keuangan RI <br />
              Kantor Pelayanan Perbendaharaan Negara Palu
            </p>
          </Col>

          <Col className='mt-5 text-center'>
            <h5 className='text-light'>Alamat Kami</h5>
            <p className='m-0 mt-2 text-secondary'>
              Jl. Tanjung Dako No.11, Lolu Sel., Kec. Palu Timur., Kota Palu,
              Sulawesi Tengah 94112
            </p>
          </Col>
        </Row>

        <Row>
          <Col className='mt-5 text-center'>
            <p className='m-0 text-light'>
              &copy; Copyright {new Date().getFullYear()} by Seksi Bank, All
              Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComponent
