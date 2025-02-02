import { CutCornerButton } from '../components/CutCornerButton'

export const HeroSection = () => {
  return (
    <section>
      <div className="container">
        <p>Intorucing Blockforge</p>
        <h1>The Future of Blockchain is Here.</h1>
        <p>
          Blockforge is pioneering smart contract integrity with cutting-edge
          data solutions
        </p>
        <CutCornerButton>Get started</CutCornerButton>
      </div>
    </section>
  )
}
