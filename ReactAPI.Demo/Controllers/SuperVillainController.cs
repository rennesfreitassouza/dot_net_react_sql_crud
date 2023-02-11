using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactAPI.Demo.Data;
using ReactAPI.Demo.Data.Entities;

namespace ReactAPI.Demo.Controllers;

[ApiController]
[Route("[controller]")]
public class SuperVillainController : ControllerBase
{
    private readonly ReactJSDemoYTContext _reactContext;

    public SuperVillainController(ReactJSDemoYTContext reactContext){
        _reactContext = reactContext;
    }
    
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        var villains = await _reactContext.SuperVillain.ToListAsync();
        return Ok(villains);
    }

    [HttpPost]
    public async Task<IActionResult> Post(SuperVillain newSuperVillain)
    {
        _reactContext.SuperVillain.Add(newSuperVillain);
        await _reactContext.SaveChangesAsync();
        return Ok(newSuperVillain);
    }

    [HttpGet]
    [Route("{id:int}")]
    public async Task<IActionResult> Get(int id)
    {
        var villainById = await _reactContext.SuperVillain.FindAsync(id);
        return Ok(villainById);
    }

    [HttpPut]
    public async Task<IActionResult> Put(SuperVillain superVillainToUpdate)
    {
        _reactContext.SuperVillain.Update(superVillainToUpdate);
        await _reactContext.SaveChangesAsync();
        return Ok(superVillainToUpdate);
    }

    [HttpDelete]
    [Route("{id:int}")]
    public async Task<IActionResult> Delete(int id)
    {
        var villainToDelete = await _reactContext.SuperVillain.FindAsync(id);
        if (villainToDelete == null)
        {
            return NotFound();
        }

        _reactContext.SuperVillain.Remove(villainToDelete);
        await _reactContext.SaveChangesAsync();
        return Ok();
    }
}